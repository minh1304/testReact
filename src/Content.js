import {useEffect,useState} from 'react'
const tabs = ['posts', 'comments', 'albums']

function Content() {

    const [avatar, setAvatar] = useState()
    useEffect(()=> {
        //Cleanup
        return () => {
            avatar && URL.revokeObjectURL(avatar.preview)
        }
    }, [avatar])
    const handlePreviewAvatar =(e) => {
        const file = e.target.files[0]
        file.preview = URL.createObjectURL(file)  
        setAvatar(file)
    }

    return (
        <div>
            <input 
                type="file"
                onChange={handlePreviewAvatar}
            />
            {avatar && (
                <img src={avatar.preview} width = "30%"></img>
            )}
        </div>
    )
    

}
export default Content