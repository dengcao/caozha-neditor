/*
* Site: www.caozha.com
*
* Gitee:  https://gitee.com/caozha/caozha-neditor
* Github:  https://github.com/cao-zha/caozha-neditor
* */

function ResetDomain()
{	var ss=document.domain;
	var ii=ss.lastIndexOf('.');
	if(ii>0)
	{	if(!isNaN(ss.substr(ii+1)*1))
			return;
		ii=ss.lastIndexOf('.',ii-1);
		if(ii>0)
			document.domain	=ss.substr(ii+1);
	}
}
ResetDomain();
