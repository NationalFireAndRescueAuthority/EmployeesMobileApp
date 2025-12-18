import Constants from 'expo-constants';

export const baseUrl = Constants.expoConfig?.extra?.baseUrl;

interface RoutesAndPorts {
    service: string;
}

const getRoutesAndPorts = (): RoutesAndPorts => {
    const envName = Constants.expoConfig?.extra?.envName;

    if (envName === 'production') {
        return {
            service: ""
        };
    } else {
        return {
            service: "http://localhost:3000"
        };
    }
};

export const routesAndPorts: RoutesAndPorts = getRoutesAndPorts();

