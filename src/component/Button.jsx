function Button({ testid, label, type, onClick, disabled = false }) {

    let color = "blue"
    if(type == "danger")
        color = "red"
    else if(type == "action")
        color = "green"

    return <button data-testid={testid} style={{
        border: "1px solid blue",
        borderRadius: 5,
        padding: 5,
        marginLeft: 5,
        backgroundColor: color,
        color:"white",
    }} onClick={onClick} disabled={disabled}>{label}</button>
}

export { Button }
