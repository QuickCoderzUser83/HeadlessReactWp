import { useSelector} from "react-redux";

const Dashboard = () => {

    const {user} = useSelector((state) => state.auth);

    return (
        <p className='text-zinc-500 text-lg'>Hi <strong>{user.user_display_name}</strong> You are Loged in</p>
    )
}

export default Dashboard