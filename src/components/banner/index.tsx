import ImgCar from "../../assets/car-home.avif"
import Input from "../input"
import SearchIcon from "../../assets/icons/search-icon.svg"
import Button from "../button"

export default function BannerMain() {
    return(
        <div className="flex justify-center items-center p-4 gap-4">
            <div className="flex flex-col gap-4">
                <div className="text-center">
                <p>
                    Pesquise informações sobre como realizar reparos, <br /> 
                    descobrir qual peça comprar, dicas de manutenção e muito mais. <br />
                    Digite sua dúvida ou o modelo do seu carro e encontre soluções <br />
                    práticas para manter seu veículo em ótimo estado!
                </p>

                </div>
                <Input
                    label=""
                    placeholder="Golf..."
                    icon={SearchIcon}
                />
                <Button
                    label="Buscar"
                />
            </div>

            <div>
                <img src={ImgCar} alt="car" width={500} height={500} />
            </div>
        </div>
    )
}