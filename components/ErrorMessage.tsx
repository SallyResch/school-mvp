const ErrorMessage = ({ error }: { error: string }) => {
    return (
        <p className="text-red-600">{error}</p>
    )
}
export default ErrorMessage