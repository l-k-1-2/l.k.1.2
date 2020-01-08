s1=input("enter 1st string")
s2=input("enter 2nd string")
l1=[]
l2=[]
n=0
if(len(s1)!=len(s2)):
    print("not anagram")
else:
    for i in range(0,len(s1)):
        l1.append(s1[i])
    for i in range(0,len(s2)):
        l2.append(s2[i])
    for i in range(0,len(l1)):
        if(l1[i] in l2):
            if(l2[i] in l1):
                n+=1
    if(n==len(s1)):
        print("anagram")
    else:
        print("not anagram")
        
