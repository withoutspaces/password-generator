import time
import random
import string
import secrets


def cadastrar_senha_gerada(password):
    
    password_list = []
    print('**'*20)

    if password == '':
        new_pass = str(input('Digite sua senha: '))
        password_list.append(new_pass)
    else:    
        password_list.append(password)
    password_list.append(str(input("Site: ")).lower())
    password_list.append(str(input("Usuário: ")).lower())
    password_list.append(str(input("E-mail: ")).lower())

    print(password_list)
    print('**'*20)


def gerar_senha():
    print("-="*20)

    how_much_cararc = int(input("Quantos caracteres terá a senha?: "))

    alphabet = string.ascii_letters + string.digits
    
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

    save_pass = str(input('\nDeseja cadastrar essa senha: [y/n] ')).lower()
    print()

    if save_pass == 'y':
        cadastrar_senha_gerada(password)
    else:
        menu()
    return

    
def menu():
    print("="*40)
    print("               BEM VINDO")
    print("="*40)

    print("Escolha uma opção")
    print("""    [1] Gerar nova senha
    [2] Cadastrar nova senha
    [3] Listar senhas
    [4] Sair""")

    escolha = int(input("Digite a opção escolhida: "))
    if escolha == 1:
        gerar_senha()
    elif escolha == 2:
        password = ''
        cadastrar_senha_gerada(password)
    elif escolha == 4:
        return


if __name__ == '__main__':
    menu()


