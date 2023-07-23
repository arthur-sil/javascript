def colatz(n):
    while n != 1 :
        if n % 2 == 0 :
            n = n/2
        else:
            n = n*3 +1
            return (n)
def seqcollatz(n):
    while n != 1 :
        return colatz(n)
    
seqcollatz(3)