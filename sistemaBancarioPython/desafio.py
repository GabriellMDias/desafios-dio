menu = """
    [d] Depositar
    [s] Sacar
    [e] Extrato
    [q] Sair
"""

saldo = 0
limite = 500
extrato = ""
numero_saques = 0
LIMITE_SAQUES = 3

while True:
    opcao = input(menu).lower()

    if opcao == 'd':
        try:
            valor = float(input("Informe o valor do depósito: "))
            if valor > 0:
                saldo += valor
                extrato += f"Depósito: R$ {valor:.2f}\n"
                print(f"Depósito de R$ {valor:.2f} realizado. Novo saldo: {saldo:.2f}")
            else:
                print("Depósito não realizado, valor informado é inválido")
        except ValueError:
            print("Erro: Por favor, insira um valor numérico.")

        
    elif opcao == 's':
        if(numero_saques >= LIMITE_SAQUES):
            print("Saque não realizado, o limite de saques foi atingido")
        else:
            try:
                valor = float(input("Informe o valor do saque:"))

                if(valor > limite):
                    print(f"Saque não realizado, o valor excedeu o limite de R$ {limite:.2f}")
                elif(valor > 0):
                    saldo -= valor
                    extrato += f"Saque: R$ {valor:.2f}\n"
                    numero_saques += 1
                    print(f"Saque de R$ {valor:.2f} realizado. Novo saldo: {saldo:.2f}")
                else:
                    print("Saque não realizado, valor informado é inválido")
            except ValueError:
                print("Erro: Por favor, insira um valor numérico.")
            
    elif opcao == 'e':
        print("--------------Extrato--------------")
        print(extrato)
        print(f"\nSaldo: R$ {saldo:.2f}")
    elif opcao == 'q':
        break
    else:
        print("Operação inválida, por favor selecione novamente a opção desejada.")
