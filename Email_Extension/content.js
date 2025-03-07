console.log("Email response Extention-Content script loaded")

function getEmailContent(){
    const selectors=['.h7','.a3s.aiL','gmail_quote','[role="presentation"]'];
    for (const selector of selectors) {
       const content=document.querySelector(selector);
       if(content){
           return content.innerText.trim();
       }
       return '';
    }
}


function findComposeToolbar(){
     const selectors=['.btC','.aDh','[role="toolbar"]','.gU.Up'];
     for (const selector of selectors) {
        const toolbar=document.querySelector(selector);
        if(toolbar){
            return toolbar;
        }
        return null;
     }
}

function createAIButton(){
       const button=document.createElement('div');
       button.className='T-I J-J5-JI aoO v& T-I-atl L3';
       button.style.marginRight='8px';
       button.innerText='AI Reply';
       button.setAttribute('role','button');
       button.setAttribute('data-tooltip','Generate AI Reply');
       return button;
}

function injectButton(){
     const existingButton=document.querySelector('.ai-reply-button');
     if(existingButton) existingButton.remove();

     const toolBar=findComposeToolbar();
     if(!toolBar){
        console.log("Toolbar not Found");
        return;
     }
     console.log("Toolbar Found,creating AI button");
     const button=createAIButton();
     button.classList.add('ai-reply-button');

     button.addEventListener('click',async()=>{
        try{
             button.innerHTML='Generating....'
             button.disabled=true;

             const emailContent=getEmailContent();
            const response= await fetch('http://localhost:8080/api/email/generate',{
                method:'POST',
                headers:{
                    'Content-Type':'application/json',
                },
                body:JSON.stringify({
                    emailContent:emailContent,
                    tone:"Professional"
                })
             });

             if(!response.ok){
                throw new Error('API Request Failed');
             }
             const generatedReply=await response.text();
             const composedBox=document.querySelector('[role="textbox"][g_editable="true"]');
             if(composedBox){
                composedBox.focus();
                document.execCommand('insertText',false,generatedReply);
             }else{
                console.log('compose box not found');
             }
        }catch(error){
            console.log(error);
            alert('Failed to Generate reply');
        }finally{
            button.innerText='AI Reply';
            button.disabled=false;
        }
     });

     toolBar.insertBefore(button,toolBar.firstChild);
}

const observer=new MutationObserver((mutations)=>{
    for(const mutation of mutations){
        const addedNodes=Array.from(mutation.addedNodes);
        const hasComposeElements=addedNodes.some(node=>
            node.nodeType===Node.ELEMENT_NODE && 
            (node.matches('.aDh,.btC,[role="dialog"]') || node.querySelector('.aDh,.btC,[role="dialog"]'))
        );

        if(hasComposeElements){
            console.log("compose window detected");
            setTimeout(injectButton,500);
        }
    }
});

observer.observe(document.body,{
    childList:true, //watces additional removal of child items
    subtree:true //watch for changes in all the decsendent
});