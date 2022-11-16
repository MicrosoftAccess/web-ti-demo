
export default function Modal({ open, children, onClose }: any) {
    if (!open) return null
    return (
        <div>
            <div>
                {children}
            </div>
            <button onClick={onClose}>close</button>
            bussines
        </div>
    )
}
