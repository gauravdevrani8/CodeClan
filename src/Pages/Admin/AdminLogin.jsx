import React, { useContext, useState, useEffect } from "react";
import {
    Card,
    CardHeader,
    CardBody,
    Input,
    Button,
    Typography,
} from "@material-tailwind/react";
import myContext from "../../Context/Data/MyContext";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../Firebase/FirebaseConfig";
import Layout from "../../Components/Layout/Layout";
import { FaGoogle, FaFacebookF, FaTwitter } from 'react-icons/fa';

export default function AdminLogin() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const context = useContext(myContext);
    const { mode } = context;
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const login = async () => {
        if (!email || !password) {
            return toast.error("All fields are required");
        }
        try {
            const result = await signInWithEmailAndPassword(auth, email, password);
            toast.success('Login Successful');
            localStorage.setItem('admin', JSON.stringify(result));
            navigate('/');
        } catch (error) {
            toast.error('Login Failed');
            console.log('Login error:', error);
        }
    };

    return (
        <Layout>
            <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-6">
                <Button
                    type="button"
                    onClick={() => navigate('/')}
                    className="mb-6 self-start rounded-lg focus:outline-none"
                    style={{
                        background: mode === 'dark' ? 'rgb(66, 153, 225)' : 'rgb(30, 41, 59)',
                        color: 'white'
                    }}
                >
                    Back to Home
                </Button>
                <Card
                    className="w-full max-w-md  rounded-lg"
                    style={{
                        background: mode === 'dark' ? 'rgb(45, 55, 72)' : 'white'
                    }}
                >
                    <CardHeader
                        color="blue"
                        floated={false}
                        shadow={false}
                        className="m-0 grid place-items-center rounded-t-lg py-6 px-4 text-center border-b"
                        style={{
                            background: mode === 'dark' ? 'rgb(30, 41, 59)' : 'rgb(240, 242, 245)'
                        }}
                    >
                        <img src="https://cdn.iconscout.com/icon/free/png-512/free-login-1699959-1444434.png?f=webp&w=256" className="h-24 w-24 mb-4" alt="Admin Icon" />
                        <Typography variant="h4" className="text-gray-900 dark:text-white font-semibold">
                            Admin Login
                        </Typography>
                    </CardHeader>
                    <CardBody className="p-8">
                        <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
                            <Input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="border rounded-lg focus:ring-2 focus:ring-blue-500 placeholder-gray-500 dark:placeholder-gray-400"
                                placeholder="Enter your email"
                                required
                            />
                            <Input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="border rounded-lg focus:ring-2 focus:ring-blue-500 placeholder-gray-500 dark:placeholder-gray-400"
                                placeholder="Enter your password"
                                required
                            />
                            <Button
                                type="button"
                                onClick={login}
                                className="mt-4 rounded-lg focus:outline-none"
                                style={{
                                    background: mode === 'dark' ? 'rgb(66, 153, 225)' : 'rgb(30, 41, 59)',
                                    color: 'white'
                                }}
                            >
                                Login
                            </Button>
                        </form>
                        <div className="flex justify-around mt-4">
                            <Button type="button" className="p-2 rounded-full" onClick={() => {/* handle Google login */}}>
                                <FaGoogle className="text-gray-600 text-xl" />
                            </Button>
                            <Button type="button" className="p-2 rounded-full" onClick={() => {/* handle Facebook login */}}>
                                <FaFacebookF className="text-gray-600 text-xl" />
                            </Button>
                            <Button type="button" className="p-2 rounded-full" onClick={() => {/* handle Twitter login */}}>
                                <FaTwitter className="text-gray-600 text-xl" />
                            </Button>
                        </div>
                    </CardBody>
                </Card>
            </div>
        </Layout>
    );
}
