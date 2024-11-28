#include <iostream>
#include <string>

using namespace std;

int main() {

bool resultOR = (520 > 320 || 720 < 420); // result = istrue
bool resultNOT = !(530 > 330); // result = isfalse
bool resultAND = (510 > 310 && 710 > 410); // result = istrue

cout<< "Result of OR Operation is "<< resultOR << endl;
cout<< "Result of NOT Operation is "<< resultNOT << endl;
cout<< "Result of AND Operation is "<< resultAND << endl;

return 0;
}