import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "./firebase";

export default function MultiSelectDropdown() {

    const navigate = useNavigate();
    const handleSignOut = () => {
        signOut(auth).then(() => {
            // Sign-out successful.

        }).catch((error) => {
            navigate("/error");
            // An error happened.
        });
    };

    return (
        <label className="relative">
            <input type="checkbox" className="hidden peer" />

            <div className="cursor-pointer after:content-['▼'] text-white after:text-xs after:ml-1 after:inline-flex after:items-center peer-checked:after:-rotate-180 after:transition-transform">
                {""}
            </div>

            <div className="w-48 cursor-pointer absolute right-4 top-12 bg-black bg-opacity-80 text-white border p-2 transition-opacity opacity-0 pointer-events-none peer-checked:opacity-100 peer-checked:pointer-events-auto"
                onClick={handleSignOut}
            >
                <ul>
                    <li className='m-2 p-2 flex'>
                        <img
                            className='w-8 h-8'
                            alt="user1"
                            src="https://occ-0-4409-3646.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABXz4LMjJFidX8MxhZ6qro8PBTjmHbxlaLAbk45W1DXbKsAIOwyHQPiMAuUnF1G24CLi7InJHK4Ge4jkXul1xIW49Dr5S7fc.png?r=e6e"
                        />
                        <p className="mx-2 ">Guest 1</p>
                    </li>
                    <li className='m-2 p-2 flex'>
                        <img
                            className='w-8 h-8'
                            alt="user1"
                            src="https://occ-0-4409-3646.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABas_mURJiP1z3yLXtuIE7lEuDjTJTfB28WTZgKip0dDxy-c3BdoGXTdWHbp0VhUwgqKsNgPf1WoD2WIa_A4kCtorVRObjkkDbcLc.png?r=54c)%22"
                        />
                        <p className="mx-2">Guest 2</p>
                    </li>
                    <li className='m-2 p-2 flex'>
                        <img
                            className='w-8 h-8'
                            alt="user1"
                            src="https://occ-0-4409-3646.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABYo85Lg8Qn22cahF2sIw7K_gDo3cGpvw3Gt5xl7FIazw864EYeVkm71Qvrlz0HP2fU4n26AVq15v5t8T4lVBpBcqqZbmRHHsMefk.png?r=1d4"
                        />
                        <p className="mx-2">Guest 3</p>
                    </li>
                    <li className='m-1 p-1'>✎ Manage Profiles</li>
                    <li className='m-1 p-1'>🔀 Transfer Profile</li>
                    <li className='m-1 p-1'>👤 Account </li>
                    <li className='m-1 p-1'>⍰ Help Centre</li>
                </ul>
                <ul>
                    <li>Sign out of Netflix</li>
                </ul>
            </div>
        </label>
    );
}