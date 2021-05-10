import { SocialIcon } from 'react-social-icons';

export default function Bottom(){

  return(
      <footer>
          <div class="container" style={{zIndex:"100", width:"100%", paddingBottom:"5px", minHight:"100vh", display: 'flex',  justifyContent:'center', alignItems:'center'}}
          className="bg-blue-600 flex justify-items-center">
            <div class="text-yellow-400">©Abdihakim Wehelie</div>
              <div className="inline-flex py-1 px-1 my-1 mx-1 justify-items-center" style={{Position:"center"}}>
                    <SocialIcon
                      url="https://github.com/AbdihakimWehelie"
                      target="_blank"
                      fgColor="#fff"
                      style={{height:35,width:35,marginRight:10}}
                      />
                      <SocialIcon
                      url="https://www.linkedin.com/in/abdihakimwehelie/"
                      target="_blank"
                      fgColor="#fff"
                      style={{height:35,width:35}}
                      />
                </div>
            </div>
      </footer>
  )

}
