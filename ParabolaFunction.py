def frac(a:str, b:str):
    return "\\frac{"+a+"}{"+b+"}";

def newfrac(prev:str, lastP:int):
    lfrac = prev.replace("x_{" + str(lastP) + "}", "x_{" + str(lastP+1) + "}")
    lfrac = lfrac.replace("y_{" + str(lastP) + "}", "y_{" + str(lastP+1) + "}")
    return frac(lfrac + "-" + prev, "x_{"+ str(lastP+1) + "} - x_{" + str(lastP) + "}")

n = int(input("n = "))

if n == 0:
    mainF = "y_1"
else:
    mainF = "y_1"
    alp = frac("y_{2}-y_{1}","x_{2}-x_{1}")
    mainF += " + (" + alp;
    ending = "(x-x_{1})"
    for m in range(2, n+1):
        alp = newfrac(alp, m)
        mainF += "+ (" + alp;
        ending = "(x-x_{" + str(m) + "}))" + ending
print(mainF + ")" + ending)

