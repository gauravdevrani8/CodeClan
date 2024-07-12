import { Fragment, useContext, useState } from "react";
import {
    Dialog,
    DialogBody,
} from "@material-tailwind/react";
import { AiOutlineShareAlt, AiFillLinkedin, AiFillInstagram, AiFillGithub, AiFillFacebook } from 'react-icons/ai';
import myContext from "../../Context/Data/MyContext";

export default function ShareDialogBox() {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(!open);

    const context = useContext(myContext);
    const { mode } = context;

    return (
        <Fragment>
            {/* Share Icon */}
            <div className="ml-auto cursor-pointer">
                <AiOutlineShareAlt onClick={handleOpen} style={{ color: mode === 'dark' ? 'white' : 'white' }} size={20} />
            </div>

            {/* Dialog */}
            <Dialog
                open={open}
                handler={handleOpen}
                className="w-full max-w-sm md:max-w-lg"
                style={{ background: mode === 'light' ? '#2f3542' : '#2f3542', color: mode === 'dark' ? 'white' : 'black' }}
            >
                {/* DialogBody */}
                <DialogBody>
                    {/* Social Icons */}
                    <div className="flex justify-center gap-4 my-4">
                        <a href="#" className="text-white">
                            <AiFillLinkedin size={35} />
                        </a>
                        <a href="#" className="text-white">
                            <AiFillInstagram size={35} />
                        </a>
                        <a href="#" className="text-white">
                            <AiFillGithub size={35} />
                        </a>
                        <a href="#" className="text-white">
                            <AiFillFacebook size={35} />
                        </a>
                    </div>

                    {/* Powered By */}
                    <div className="text-center">
                        <p className="text-gray-600">Powered By Devknus</p>
                    </div>
                </DialogBody>
            </Dialog>
        </Fragment>
    );
}
