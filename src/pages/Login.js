import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import axios from 'axios';
import { config } from '../api/Api'
import Button from '../elements/Button';
import Input from '../elements/Input';
import Label from '../elements/Label';
import Alert from '../elements//Alert';

const initInput = {
    device_type: "WEB",
    device_model: "WEB",
    device_id: 123,
    userid: '',
    password: ''
};

const initStateAlert = {
    appear: false,
    type: '',
    message: ''
};

export default function Login() {
    const [input, setInput] = useState(initInput);
    const [appearAlert, setAppearAlert] = useState(initStateAlert);
    const [isLoading, setIsLoading] = useState(false)
    const navigate = useNavigate();

    const handleAlert = () => {
        setAppearAlert(initStateAlert);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true)
        try {
            const { data } = await axios.post(`${config.api_host}/login`,
                { ...input },
                {
                    headers: {
                        Accept: "*/*",
                        "Content-Type": "application/json",
                        api_key: `Basic 15cb7ebf9-3dcc-h28s-b056-2522c1eed03e`
                    }
                }
            );
            const { token, email } = data.data.profile_data
            Cookies.set('token', token);
            Cookies.set('user', email);
            setIsLoading(false)
            setAppearAlert({
                appear: true,
                type: 'success',
                message: 'Berhasil Login!',
            });
            navigate('/dashboard');
        } catch (error) {
            console.log(error);
            setIsLoading(false)
            setAppearAlert({
                appear: true,
                type: 'danger',
                message: error.message,
            });
        }
        setInput(initInput);
        setTimeout(() => {
            setAppearAlert({
                appear: false,
                type: '',
                message: '',
            });
        }, 30000);
    };

    const handleChange = (e) => {
        let { name, value } = e.target;
        setInput({ ...input, [name]: value });
    };

    return (
        <div className="relative flex items-center justify-center min-h-screen dark:bg-gradient-to-tr dark:from-gray-900 dark:to-slate-800">
            <div className="px-4 py-4 text-gray-100 bg-gray-100 rounded-lg shadow-md  sm:w-2/4 lg:w-1/3 dark:bg-slate-800">
                <div className="mb-5 text-2xl font-medium text-center border-b text-slate-900 dark:text-gray-100">
                    Login
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="mb-5">
                        <Label htmlFor="email">Email</Label>
                        <Input
                            id="email"
                            name="userid"
                            value={input.userid}
                            onChange={(e) => handleChange(e)}
                            required
                        />
                    </div>
                    <div className="mb-5">
                        <Label htmlFor="password">Password</Label>
                        <Input
                            type="password"
                            id="password"
                            name="password"
                            value={input.password}
                            onChange={(e) => handleChange(e)}
                            required
                        />
                    </div>
                    <div className="mb-5 text-center">
                        <Button
                            type="submit"
                            disabled={isLoading === true}
                            isBlock
                            isLarge>
                            {isLoading ? 'Loading...' : 'Login'}
                        </Button>
                    </div>
                </form>
            </div>
            {appearAlert.appear && (
                <Alert
                    type={appearAlert.type}
                    message={appearAlert.message}
                    handleClick={handleAlert}
                />
            )}
        </div>
    );
}
