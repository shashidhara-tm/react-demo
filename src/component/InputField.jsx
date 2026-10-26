function InputField({ testid, value, onChange, ...props }){
    return <input  data-testid={testid} value={value} onChange={onChange} style={{
        border: "1px solid blue",
        borderRadius: 5,
        padding: 5,
    }} type="text" {...props} />
}

export { InputField }
