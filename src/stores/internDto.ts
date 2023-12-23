/**
 * --------------------
 * Created by oliver.scharkowski on 21.12.23 - 11:18 😎
 * --------------------
 * Check out -> oscharko.de
 * --------------------
 * oscharko-library
 * --------------------
 */
import { defineStore } from 'pinia'
import {reactive} from "vue";

export const useInternDto = defineStore('internDto', () => {
  let internDto: any = reactive({})

  const setInterDto = (dataBinding: string, value: string) => {
    internDto[`${dataBinding}`] = { value: value }
  }

  const getInternDto = () => {
    return internDto
  }

  const getValueFromInternDto = (dataBinding: string) => {
    return internDto[`${dataBinding}`]
  }

  const clearCompleteInternDto = () => {
    internDto = reactive({})
  }

  const clearValueFromInternDto = (dataBinding: string) => {
    delete internDto[`${dataBinding}`]
  }

  return {
    setInterDto,
    getInternDto,
    getValueFromInternDto,
    clearCompleteInternDto,
    clearValueFromInternDto,
  }
})
