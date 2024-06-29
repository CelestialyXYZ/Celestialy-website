import { defineStore } from 'pinia'
import Fuse from 'fuse.js'

interface Coords {
  ra: number
  dec: number
}

interface Data {
  name_en: string | null
  name_fr: string | null
  name_extra: string[]
  type: string
  const: string
  majax: number | null
  minax: number | null
  posang: number | null
  b_mag: number | null
  v_mag: number | null
  j_mag: number | null
  h_mag: number | null
  k_mag: number | null
  surfbr: number | null
  hubble: number | null
  pax: number | null
  pm_ra: number | null
  pm_dec: number | null
  radvel: number | null
  redshift: number | null
  cstar_u_mag: number | null
  cstar_b_mag: number | null
  cstar_v_mag: number | null
  m: string[]
  ngc: string[]
  ic: string[]
  cstar_names: string | null
  identifiers: any[]
  ned_notes: string | null
  openngc_notes: string | null
  sources: string
  coords: Coords
  id: number
}

export const useSessionStore = defineStore('search', () => {
  let db: IDBDatabase | null = null
  const request = indexedDB.open('dsoDB', 1)

  request.onsuccess = (event: Event) => {
    db = (event.target as IDBOpenDBRequest).result
    console.log('Database opened successfully')

    // Add initial data
    addData({
      name_en: null,
      name_fr: null,
      name_extra: [],
      type: '**',
      const: 'Peg',
      majax: null,
      minax: null,
      posang: null,
      b_mag: null,
      v_mag: null,
      j_mag: null,
      h_mag: null,
      k_mag: null,
      surfbr: null,
      hubble: null,
      pax: null,
      pm_ra: null,
      pm_dec: null,
      radvel: null,
      redshift: null,
      cstar_u_mag: null,
      cstar_b_mag: null,
      cstar_v_mag: null,
      m: [],
      ngc: [],
      ic: ['IC1'],
      cstar_names: null,
      identifiers: [],
      ned_notes: null,
      openngc_notes: null,
      sources: 'Type:1|RA:1|Dec:1|Const:99',
      coords: {
        ra: 0.14084722222222223,
        dec: 27.717666666666666
      },
      id: 0
    })
  }

  request.onupgradeneeded = (event: IDBVersionChangeEvent) => {
    db = (event.target as IDBOpenDBRequest).result
    const objectStore = db.createObjectStore('astronomy', { keyPath: 'id' })
    objectStore.createIndex('const', 'const', { unique: false })
    objectStore.createIndex('sources', 'sources', { unique: false })
    objectStore.createIndex('name_en', 'name_en', { unique: false })
    objectStore.createIndex('name_fr', 'name_fr', { unique: false })
    objectStore.createIndex('name_extra', 'name_extra', { unique: false })
    objectStore.createIndex('m', 'm', { unique: false })
    objectStore.createIndex('ngc', 'ngc', { unique: false })
    objectStore.createIndex('ic', 'ic', { unique: false })
    objectStore.createIndex('identifiers', 'identifiers', { unique: false })
    console.log('Object store created successfully')
  }

  request.onerror = (event: Event) => {
    console.error('Database error:', (event.target as IDBOpenDBRequest).error)
  }

  function addData(data: Data) {
    if (!db) return
    const transaction = db.transaction(['astronomy'], 'readwrite')
    const objectStore = transaction.objectStore('astronomy')
    objectStore.add(data)
  }

  function getAllData(callback: (data: Data[]) => void) {
    if (!db) return
    const transaction = db.transaction(['astronomy'], 'readonly')
    const objectStore = transaction.objectStore('astronomy')
    const request = objectStore.getAll()

    request.onsuccess = (event: Event) => {
      callback((event.target as IDBRequest).result as Data[])
    }
  }

  // Function to perform search using Fuse.js
  function searchDatabase(query: string, callback: (results: any[]) => void) {
    getAllData((data) => {
      const options = {
        keys: [
          'const',
          'sources',
          'name_en',
          'name_fr',
          'name_extra',
          'm',
          'ngc',
          'ic',
          'identifiers'
        ],
        includeScore: true,
        threshold: 0.4
      }

      const fuse = new Fuse(data, options)
      const result = fuse.search(query)
      callback(result)
    })
  }

  return {
    searchDatabase
  }
})

// Usage Example (outside of the store definition)
const store = useSessionStore()
store.searchDatabase('Peg', (results) => {
  console.log(results)
})
