<script setup lang="ts">
import axios from 'axios'
import { onMounted, ref } from 'vue'

interface Object {
  name: string
  id: string
}

const categories = ref<Array<Object>>([])
const selectedCategory = ref<Object>({ name: '', id: '' })
const categoryProducts = ref<Array<Object>>([])
const selectedProduct = ref<Object>({ name: '', id: '' })

const getCategoryById = async (id: string) => {
  const { data } = await axios(`http://localhost:8888/category/${id}`)
  return data
}
const getCategoryProducts = async (id: string) => {
  const { data } = await axios(`http://localhost:8888/category/${id}/products`)
  return data
}
const getProductById = async (categoryId: string, productId: string) => {
  const { data } = await axios(`http://localhost:8888/category/${categoryId}/products/${productId}`)
  return data
}

const selectCategory = async (id: string) => {
  selectedCategory.value = await getCategoryById(id)
  categoryProducts.value = await getCategoryProducts(id)
  selectedProduct.value = { name: '', id: '' }
}

const selectProduct = async (categoryId: string, productId: string) => {
  selectedProduct.value = await getProductById(categoryId, productId)
}

onMounted(async () => {
  const { data } = await axios('http://localhost:8888/category')
  categories.value = data
})
</script>

<template>
  <main>
    <h3>Categories</h3>
    <ul>
      <li v-for="category in categories" :key="category.id">
        <p @click="selectCategory(category.id)">
          {{ category.name }}
        </p>
      </li>
    </ul>
    <div v-if="selectedCategory.name !== ''">
      <br /><br />
      <p>
        Selected Category: <strong>{{ selectedCategory.name }}</strong>
      </p>
      <br />
      <h4>Products</h4>
      <ul v-if="categoryProducts">
        <li v-for="product in categoryProducts" :key="product.id">
          <p @click="selectProduct(selectedCategory.id, product.id)">{{ product.name }}</p>
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
