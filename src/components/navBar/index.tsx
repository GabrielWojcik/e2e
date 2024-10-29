import UserIcon from "../../assets/icons/user-icon.svg"

export default function NavBar() {
    return(
        <div className="flex justify-around p-4">
            <div>
                <p className="text-[#525459]">Car Hub</p>
            </div>

            <div>
                <ul className="flex gap-4 text-[#171a20] font-medium">
                    <li>Marcas</li>
                    <li>Peças</li>
                    <li>Testes</li>
                </ul>
            </div>

            <div className="flex gap-4">
                <img src={UserIcon} alt="user icon" color="#000000" />
            </div>          
        </div>
    )
}