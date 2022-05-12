<template>
  <div class="flex flex-col px-3">
    <div v-for="item in sidebarItems" class="flex flex-col items-center my-3">
      <Component :is="item.icon" />
      {{ item.name }}
    </div>
  </div>
</template>

<script setup lang="ts">
// @ts-expect-error
import IconProducts from '~icons/eos-icons/products-outlined'
// @ts-expect-error
import IconsUsers from '~icons/clarity/users-line'
interface ISidebarItem {
  name: string
  icon: any
  path: string
}
const sidebarItems: ISidebarItem[] = [
  {
    name: 'Products',
    icon: IconProducts,
    path: 'products',
  },
  {
    name: 'Users',
    icon: IconsUsers,
    path: 'users',
  },
]
</script>

<style scoped></style>
