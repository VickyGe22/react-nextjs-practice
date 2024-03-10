import Photos from '@/app/photos';
import Modal from '../../../component/modal';
import Photo from '../../../component/frame';



export default function PhotoModal({params:{id:photoId}}){
    const photo = photoId && Photos.find((p)=>p.id === photoId.id)

    return (
        <Modal>
            <Photo photo={photo}/>
        </Modal>
    )
}

//拦截路由，本来正常photos下page显示，现在显示modal