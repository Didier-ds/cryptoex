import { ref } from 'vue'
export default function () {
    const files = ref([])

    const addFiles = (newFiles) => {
        let newUploadableFiles = [...newFiles]
            .map((file) => new UploadableFile(file))
            .filter((file) => !fileExists(file.id))
        files.value = files.value.concat(newUploadableFiles)
    }

    const fileExists = (otherId) => {
        return files.value.some(({ id }) => id === otherId)
    }

    return { files, addFiles }
}
class UploadableFile {
    constructor(file) {
        this.file = file
        this.id = `${file.name}-${file.size}-${file.lastModified}-${file.type}`
        this.url = URL.createObjectURL(file)
        this.status = null
    }
}
