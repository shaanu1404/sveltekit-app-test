import { writable } from 'svelte/store'
import { auth } from '$lib/firebase'
import { onAuthStateChanged, type User } from 'firebase/auth'

function userStore() {
    // If firebase auth not initialized.
    if (!auth || !globalThis.window) {
        console.warn('Auth is not initialized or not in browser')
        const { subscribe } = writable<User | null>(null)
        return { subscribe }
    }

    const { subscribe } = writable<User | null>(auth?.currentUser ?? null, (set) => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            set(user)
        })
        return () => unsubscribe()
    })

    return {
        subscribe
    }
}

export const user = userStore()