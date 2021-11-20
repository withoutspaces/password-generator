from time import sleep
from random import choice
import string
import secrets
import os

def limpar_tela():
    os.system('cls' if os.name == 'nt' else 'clear')
    return


def gerar_senha():
    print("-="*20)

    how_much_cararc = int(input("Quantos caracteres terá a senha?: "))

    alphabet = string.ascii_letters + string.digits + string.punctuation
    
    password = ''.join(secrets.choice(alphabet) for i in range(how_much_cararc))
    if (any(c.islower() for c in password)
        and any(c.isupper() for c in password)
        and sum(c.isdigit() for c in password) >= 3):
        pass

    print()
    print('**'*20)
    print('SENHA:', password)
    print('**'*20)
    print()

    return

    
def menu():
    print("="*40)
    print("               BEM VINDO")
    print("="*40)

    print("Escolha uma opção")
    print("""    [1] Gerar nova senha
    [2] Sair""")

    

    escolha = int(input("Digite a opção escolhida: "))
    limpar_tela()

    if escolha == 1:
        gerar_senha()
    elif escolha == 2:
        return


if __name__ == '__main__':
    menu()


