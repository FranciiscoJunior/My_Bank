import Image from "next/image";
import { Container } from "./Container";

import PhoneIcon from '@angular/phone-icon.svg'
import SoluctionsIcon from '@/assets/icon-solutions.svg'
import OptionsIcon from '@/assets/icon-options.svg'
import CardIcon from '@/assets/icon-card.svg'

import ImagePhone from '@/assets/image-phone.svg'

export function SectionServices () {
    return (
        <section className="relative w-full h-[965px]">
            <Container>
                <div className="flex-1 max-w[594px] pt-32">
                    <span className="block  border-b-orange-600 text-sm font-bold uppercase mb-9">Serviço exclusivo</span>
                    <h2 className="text-black text-[56px] font-bold leading-tight mb-6">Gerencie suas finanças sem sair de casa</h2>
                    <p className="text-lg max-w-[554px] mb-16 text-amber-950">Veja como voçê pode cuidar das suas finanças pelo app
                        Itaú de forma segura, rápida e o melhor,
                        no conforto de sua casa.</p>

                        <ul className="flex flex-col items-start gap-9">
                            <li className="flex items-center gap-9 pb-9 border-b-[1px] border-b-orange-600">
                                <div className="w-7 h-7 flex items-center justify-center">
                                <Image
                                src={PhoneIcon}
                                alt="Icon Phone"
                                />
                                </div>
                                <p className="flex-1 text-amber-800 pr-2">Acompanhar sua conta, fazer transferências e pagamentos de onde estiver</p>
                            </li>

                            <li className="flex items-center gap-9 pb-9">
                                <div className="w-7 h-7 flex items-center justify-center">
                                <Image
                                src={SoluctionsIcon}
                                alt="Icon Phone"
                                />
                                </div>
                                <p className="flex-1 text-amber-800 pr-2">Soluções de empresas e renegociação, para organizar suas finanças</p>
                            </li>

                            <li className="flex items-center gap-9 pb-9">
                                <div className="w-7 h-7 flex items-center justify-center">
                                <Image
                                src={OptionsIcon}
                                alt="Icon Phone"
                                />
                                </div>
                                <p className="flex-1 text-amber-800 pr-2">Diversas opções de investimentos de acordo com seu perfil de investidor</p>
                            </li>

                            <li className="flex items-center gap-9">
                                <div className="w-7 h-7 flex items-center justify-center">
                                <Image
                                src={CardIcon}
                                alt="Icon Phone"
                                />
                                </div>
                                <p className="flex-1 text-amber-800 pr-2">Acompanhe a fatura do seu cartão de crédito e faça compras on-line com seu cartão virtual!</p>
                            </li>
                        </ul>
                </div>
            </Container>

            <div className="absolute top-0 right-0 flex items-center w=[32%] h-full bg-amber-800">
                <Image src={ImagePhone} alt="Phone" className="translate-x-[50%]"/>
            </div>
        </section>
    )
}