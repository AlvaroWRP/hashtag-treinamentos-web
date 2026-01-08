import { FormInput } from '../../utils/FormInput';
import { TotalPriceCell } from '../../components/cart/TotalPriceCell';
import { CartProducts } from '../../components/cart/CartProducts';

export function Checkout() {
    return (
        <main className="bg-stone-200 h-[calc(100dvh-5em)]">
            <p className="text-center text-2xl font-bold text-slate-950 pt-8">Finalizar compra</p>
            <form className="grid grid-rows-[max-content_1fr_1fr_1fr_1fr_1fr] grid-cols-3 grid-flow-col gap-4 h-3/4 mt-5 px-8">
                <p className="text-center text-sm font-bold text-slate-950">Seus dados</p>
                <FormInput
                    id="name"
                    fieldName="Nome"
                    fieldType="text"
                    placeholder="Digite seu nome"
                    required
                ></FormInput>
                <FormInput
                    id="surname"
                    fieldName="Sobrenome"
                    fieldType="text"
                    placeholder="Digite seu sobrenome"
                    required
                ></FormInput>
                <FormInput
                    id="email"
                    fieldName="E-mail"
                    fieldType="email"
                    placeholder="Digite seu e-mail"
                    required
                ></FormInput>
                <FormInput
                    id="phone"
                    fieldName="Telefone"
                    fieldType="tel"
                    placeholder="(99) 99999-9999"
                    required
                ></FormInput>
                <p className="text-center text-sm font-bold text-slate-950 row-start-1">
                    Pagamento e entrega
                </p>
                <FormInput
                    id="credit-card"
                    fieldName="Número do cartão"
                    fieldType="text"
                    placeholder="9999 9999 9999 9999"
                    required
                ></FormInput>
                <div className="flex justify-center gap-3">
                    <FormInput
                        id="cvv"
                        fieldName="CVV"
                        fieldType="text"
                        placeholder="123"
                        className="w-1/2"
                        required
                    ></FormInput>
                    <FormInput
                        id="expiration-date"
                        fieldName="Data de vencimento"
                        fieldType="text"
                        placeholder="01/30"
                        className="w-1/2"
                        required
                    ></FormInput>
                </div>
                <FormInput
                    id="postal-code"
                    fieldName="CEP"
                    fieldType="text"
                    placeholder="99999-999"
                    required
                ></FormInput>
                <FormInput
                    id="address"
                    fieldName="Endereço"
                    fieldType="text"
                    placeholder="Digite aqui seu endereço"
                    required
                ></FormInput>
                <div className="flex justify-center gap-3">
                    <FormInput
                        id="address-number"
                        fieldName="Número"
                        fieldType="text"
                        placeholder="27"
                        className="w-1/2"
                    ></FormInput>
                    <FormInput
                        id="additional-details"
                        fieldName="Complemento"
                        fieldType="text"
                        placeholder="Digite aqui o complemento"
                        className="w-1/2"
                    ></FormInput>
                </div>
                <p className="text-center text-sm font-bold text-slate-950 row-start-1">
                    Seus produtos
                </p>
                <section className="row-span-4 p-2 bg-neutral-100 rounded-md overflow-auto">
                    <CartProducts isHomepage={false}></CartProducts>
                </section>
                <section className="row-span-1 flex flex-col gap-2">
                    <TotalPriceCell></TotalPriceCell>
                    <button className="bg-slate-950 text-slate-100 rounded-md p-1 hover:bg-slate-800 text-center">
                        Finalizar compra
                    </button>
                </section>
            </form>
        </main>
    );
}
