 
function encrypt ()
{
    var error = document.getElementById("keyerror");
    error.textContent = "";

    //i just add 'v' as first letter for some variables because the same name contains in the html as name so i won't mess up this
    var vplaintext,key;
    vplaintext = (document.cipher.plaintext.value);
    key = (document.cipher.cipher_key.value);

    for(let i = 0, keylength = key.length; i < keylength; i++)
    {
        if(key[i] < '0' || key[i] > '9')
        {
            error.textContent = "Key must contains only numbers with no space";
            return;
        }
    }
    var numkey = Number(key);
    let result = "";
    for ( let i = 0, len = vplaintext.length; i < len; i++)
    {
        let temp = vplaintext[i].charCodeAt(0);
        if ( temp >= 65 && temp <= 90)
        {
            result += String.fromCharCode(((temp - 65 +numkey) %26 ) + 65);
        }
        else if (temp >= 97 && temp <= 122)
        {
            result += String.fromCharCode(((temp - 97 + numkey)%26) + 97);
        }
        else
        {
            result += String.fromCharCode(temp);
        }
    }
    document.getElementById("output").value = result;
}
function decrypt ()
{
    var error = document.getElementById("keyerror");
    error.textContent = "";
    var vplaintext,key;
    vplaintext = (document.cipher.plaintext.value);
    key = (document.cipher.cipher_key.value);

    for (let i = 0, keylength = key.length; i < keylength; i++)
    {
        if (key[i] < '0' ||key[i] > '9')
        {
            error.textContent = "Key must contains only numbers with no space";
            return;
        }
    }
    var numkey = Number(key);
    let result = "";
    for (let i = 0 ,len = vplaintext.length; i < len; i++)
    {
        let temp = vplaintext[i].charCodeAt(0);
        if (temp >= 65 && temp <= 90)
        {
            result += String.fromCharCode(((temp - 65 - numkey)%26 + 26)%26 +65);
        }
        else if (temp >= 97 && temp <= 122)
        {
            result += String.fromCharCode(((temp - 97 - numkey)%26 +26)%26 +97);
        }
        else
        {
            result += String.fromCharCode(temp);
        }
    }
    document.getElementById("output").value = result;
}