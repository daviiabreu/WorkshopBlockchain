export default function Checkbox(){
    return (
        <div className="flex">
            <label className="text-black">Gênero:</label>
            <input type="checkbox" id="feminino" name="feminino" value="Feminino"/>
            <label for="carro">Feminino</label>
            <input type="checkbox" id="masculino" name="masculino" value="Masculino"/>
            <label for="carro2">Masculino</label>
        </div>
    )
}
