while True: # The main game loop.
    number = int(input('Enter number:\n'))  
    def collatz(number):
        while number !=1:
            if number % 2==0: #even numbers
                number=number//2
                print(number)
            elif number % 2!=0: #odd numbers
                number=number*3+1
                print(number)
    collatz(number)