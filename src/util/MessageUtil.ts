import Swal from "sweetalert2";

class MessageUtil {

    success(title: string, description?: string, hasCancelButton?: boolean, cancelButtonText?: string, onCancel?: () => void, hasConfirmButton: boolean = true, confirmButtonText: string = "OK", onConfirm?: () => void) {
        Swal.fire({
            title: title,
            icon: "success",
            text: description,
            showCancelButton: hasCancelButton,
            showConfirmButton: hasConfirmButton,
            confirmButtonText: confirmButtonText,
            cancelButtonText: cancelButtonText
        }).then((res) => {
            if (res.isConfirmed && onConfirm) {
                onConfirm();
            } else if (res.isDenied && onCancel) {
                onCancel();
            }
        })
    }

    error(title: string, description?: string, hasCancelButton?: boolean, cancelButtonText?: string, onCancel?: () => void, hasConfirmButton: boolean = true, confirmButtonText: string = "OK", onConfirm?: () => void) {
        Swal.fire({
            title: title,
            icon: "error",
            text: description,
            showCancelButton: hasCancelButton,
            showConfirmButton: hasConfirmButton,
            confirmButtonText: confirmButtonText,
            cancelButtonText: cancelButtonText
        }).then((res) => {
            if (res.isConfirmed && onConfirm) {
                onConfirm();
            } else if (res.isDenied && onCancel) {
                onCancel();
            }
        })
    }

    warn(title: string, description?: string, hasCancelButton?: boolean, cancelButtonText?: string, onCancel?: () => void, hasConfirmButton: boolean = true, confirmButtonText: string = "OK", onConfirm?: () => void) {
        Swal.fire({
            title: title,
            icon: "warning",
            text: description,
            showCancelButton: hasCancelButton,
            showConfirmButton: hasConfirmButton,
            confirmButtonText: confirmButtonText,
            cancelButtonText: cancelButtonText
        }).then((res) => {
            if (res.isConfirmed && onConfirm) {
                onConfirm();
            } else if (res.isDenied && onCancel) {
                onCancel();
            }
        })
    }

    question(title: string, description?: string, hasCancelButton?: boolean, cancelButtonText?: string, onCancel?: () => void, hasConfirmButton: boolean = true, confirmButtonText: string = "OK", onConfirm?: () => void) {
        Swal.fire({
            title: title,
            icon: "question",
            text: description,
            showCancelButton: hasCancelButton,
            showConfirmButton: hasConfirmButton,
            confirmButtonText: confirmButtonText,
            cancelButtonText: cancelButtonText
        }).then((res) => {
            if (res.isConfirmed && onConfirm) {
                onConfirm();
            } else if (res.isDenied && onCancel) {
                onCancel();
            }
        })
    }
}

export default new MessageUtil();