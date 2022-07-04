import { ref, computed } from 'vue'


export const collapsed = ref(false);

window.addEventListener("resize", () => {
    if (window.innerWidth <= 600) {
        collapsed.value = true;
        return
    }
})

export const toggleSidebar = () => { collapsed.value = !collapsed.value }

export const SIDEBAR_WIDTH = 150;
export const SIDEBAR_WIDTH_COLLAPSED = 50;
export const sidebarWidth = computed(() => {
    return `${collapsed.value ? SIDEBAR_WIDTH_COLLAPSED : SIDEBAR_WIDTH}px`
})


