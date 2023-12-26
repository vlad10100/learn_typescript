<script setup lang="ts">
import axios from 'axios'
import { onMounted, ref, computed } from 'vue'

interface Object {
  name: string
  id: string
}

const categories = ref<Array<Object>>([])
const selectedCategory = ref<Object>({ name: '', id: '' })
const categoryProducts = ref<Array<Object>>([])
const selectedProduct = ref<Object>({ name: '', id: '' })
const productOperation = ref<'add' | 'update' | 'delete'>('add')
const productName = ref('')

const getCategoryById = async (id: string) => {
  const { data } = await axios.get(`http://localhost:8888/category/${id}`)
  return data
}
const getCategoryProducts = async (id: string) => {
  const { data } = await axios.get(`http://localhost:8888/category/${id}/products`)
  return data
}
const getProductById = async (categoryId: string, productId: string) => {
  const { data } = await axios.get(
    `http://localhost:8888/category/${categoryId}/products/${productId}`
  )
  return data
}

const selectCategory = async (id: string) => {
  selectedCategory.value = await getCategoryById(id)
  categoryProducts.value = await getCategoryProducts(id)
  selectedProduct.value = { name: '', id: '' }
}

const categoryTitle = computed(() => {
  switch (productOperation.value) {
    case 'add':
      return 'Add Product'
    case 'update':
      return 'Update Category Name'
    case 'delete':
      return 'Delete Product'
    default:
      return ''
  }
})

const changeOperation = (operation: string) => {
  switch (operation) {
    case 'add':
      productName.value = ''
      productOperation.value = 'add'
      break
    case 'update':
      productName.value = selectedCategory.value.name
      productOperation.value = 'update'
      break
    case 'delete':
      productOperation.value = 'delete'
      break
    default:
      return ''
  }
}

const selectProduct = async (categoryId: string, productId: string) => {
  selectedProduct.value = await getProductById(categoryId, productId)
}

const addOrUpdateCategory = async () => {
  try {
    const payload = {
      name: productName.value
    }
    const categoryId = selectedCategory.value.id
    if (productOperation.value === 'add') {
      await axios.post(`http://localhost:8888/category`, payload)
      await selectCategory(categoryId)
      const { data } = await axios.get('http://localhost:8888/category')
      categories.value = data
      productName.value = ''
    }
    if (productOperation.value === 'update') {
      await axios.patch(`http://localhost:8888/category/${categoryId}`, payload)
      const { data } = await axios.get('http://localhost:8888/category')
      categories.value = data
    }
  } catch (error) {
    console.log(error)
  }
}

const deleteCategory = () => {
  console.log('delete')
}

onMounted(async () => {
  const { data } = await axios.get('http://localhost:8888/category')
  categories.value = data
})
</script>

<template>
  <main class="p-5 space-y-20">
    <div>
      <h3 class="text-xl">Categories</h3>
      <ul class="pl-4">
        <li v-for="category in categories" :key="category.id">
          <p @click="selectCategory(category.id)" class="cursor-pointer">
            {{ category.name }}
          </p>
        </li>
      </ul>
    </div>

    <div v-if="selectedCategory.name !== ''">
      <p>
        Selected Category: <strong>{{ selectedCategory.name }}</strong>
      </p>
      <div class="flex gap-4 mt-3">
        <p class="cursor-pointer" @click="changeOperation('add')">Add</p>
        <p class="cursor-pointer" @click="changeOperation('update')">Update</p>
        <p class="cursor-pointer" @click="changeOperation('delete')">Delete</p>
      </div>
      <div class="w-56 space-y-2">
        <h1>{{ categoryTitle }}</h1>
        <div v-if="productOperation !== 'delete'" class="space-y-2">
          <input
            type="text"
            v-model="productName"
            class="border border-black rounded-md p-1 w-full"
          />
          <div class="flex justify-end">
            <button
              class="w-20 bg-gray-200 py-1 px-3 rounded-md border"
              @click="addOrUpdateCategory"
            >
              Submit
            </button>
          </div>
        </div>
        <div v-else>
          <button class="w-56 bg-gray-200 py-1 px-3 rounded-md border" @click="deleteCategory">
            Confirm Deletion
          </button>
        </div>
      </div>
    </div>

    <div>
      <h4 class="text-xl">Products</h4>
      <ul class="pl-4" v-if="categoryProducts">
        <li v-for="product in categoryProducts" :key="product.id">
          <p class="cursor-pointer" @click="selectProduct(selectedCategory.id, product.id)">
            {{ product.name }}
          </p>
        </li>
      </ul>
      <p v-if="!categoryProducts.length">No products found</p>
    </div>

    <div v-if="selectedProduct.name !== ''">
      <br /><br />
      <p>
        Selected Product: <strong>{{ selectedProduct.name }}</strong>
      </p>
    </div>
  </main>
</template>
