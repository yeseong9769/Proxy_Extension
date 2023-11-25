var config = {
    mode: "pac_script",
    pacScript: {
      data: "function FindProxyForURL(url, host) {\n" +
            "  if ((dnsDomainIs(host, '.twitch.tv')) || (dnsDomainIs(host, '.ttvnw.net')))\n" +
            "    return 'PROXY 52.196.27.154:3128';\n" +
            "  return 'DIRECT';\n" +
            "}"
    }
  };
  
  chrome.proxy.settings.set(
    {value: config, scope: 'regular'},
    function() {
        console.log("설정 적용")
    }
  );
  