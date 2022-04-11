import { ref } from 'vue'
export default function() {
    const files = ref([])

    // function to gets files when user upload using browse click
    const inputFiles = (e) => {
            addFiles(e.target.files)
        }
        // function to gets files when user drags and drop image
    const dropFiles = (e) => {
        addFiles(e.dataTransfer.files)
    }
    const addFiles = (newFiles) => {
        let newUploadableFiles = [...newFiles]
            .map((file) => new UploadableFile(file))
            .filter((file) => !fileExists(file.id))
        files.value = files.value.concat(newUploadableFiles)
    }

    const removeFile = (file) => {
        const index = files.value.indexOf(file)
        if (index > -1) files.value.splice(index, 1)
    }
    const fileExists = (otherId) => {
        return files.value.some(({ id }) => id === otherId)
    }

    return { files, inputFiles, dropFiles, removeFile }
}
class UploadableFile {
    constructor(file) {
        this.file = file
        this.id = `${file.name}-${file.size}-${file.lastModified}-${file.type}`
        this.url = URL.createObjectURL(file)
        this.status = null
    }
}