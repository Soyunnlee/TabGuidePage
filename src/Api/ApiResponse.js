

export function ApiResponse(data) {
    if (data.isSuccess) {
        return data.data
    }
    else {
        return data.stateCode
    }
}

