    var withPrefix = 0;
    function encode()
    {
        var hex = "";
        var data = document.getElementsByClassName('it-bin');
        for(var i = 0;i < data.length;i++)
        {
            binStr = data[i].value;
            hexLSB = parseInt(binStr.substr(-4),2).toString(16);
            hexMSB = parseInt(binStr.substr(0,4),2).toString(16);
      hexStr = hexMSB + hexLSB;
            document.getElementsByClassName('it-hex')[i].innerHTML = hexStr.toUpperCase();
            hex += hexStr.toUpperCase();
        }
        if(withPrefix === 1)
        {
            hex = "0x" + hex;
        }
        document.getElementById('hex').value = hex;

    }
    function decode()
    {
        var hex = document.getElementById('hex').value;
        var leftByte = hex.substr(0,2);
        if ( leftByte === "0x")
        {
            hex = hex.substr(2);
            withPrefix = 1;
        }
        else if (leftByte !== "0x") {
            withPrefix = 0;
        }
        var bytes = {};
        for (i=0, j=0; i < hex.length; i+=2, j++)
        {
            var byte_hex = hex.substr(i, 2);
            var byte_bin = ("00000000" + (parseInt(byte_hex, 16)).toString(2)).substr(-8);
            bytes[j] = {
                        number: j,
                        hex: byte_hex,
                        bin: byte_bin
                        };
        }
        var li_elements = "";
        for (var byte in bytes)
        {
            b_no = bytes[byte].number;
            ("00" + (parseInt(byte_hex, 16)).toString(2)).substr(-8);
            b_hex = bytes[byte].hex;
            b_bin = bytes[byte].bin;

            li_elements +=
            "<li>" +
                "<span>" + b_no + "</span>" +
                " - " +
                "<span class=\"it-hex\">" + b_hex + "</span>" +
                " - " +
                "<input class=\"it-bin\" type=\"text\" value=\"" + b_bin + "\" onkeyup=\"encode()\"/>" +
            "</li>";
        }
        document.getElementById("sidebar-list").innerHTML = li_elements;
    }