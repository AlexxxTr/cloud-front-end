import mqtt from "mqtt";

const data: {
  connection: {
    host: string;
    port: number;
    endpoint: string;
    clean: boolean;
    connectTimeout: number;
    reconnectPeriod: number;
    clientId: string;
    username: string;
    password: string;
  };
  subscription: {
    topic: string;
    qos: 0 | 1 | 2;
  };
  publish: {
    topic: string;
    qos: 0 | 1 | 2;
    payload: string;
  };
  receiveNews: string;
  qosList: { label: number; value: number }[];
  client?: mqtt.MqttClient;
  subscribeSuccess: boolean;
} = {
  connection: {
    host: "192.168.137.187",
    port: 8083,
    endpoint: "/mqtt/pimylifeup",
    clean: true, // Reserved session
    connectTimeout: 4000, // Time out
    reconnectPeriod: 4000, // Reconnection interval
    // Certification Information
    clientId: "",
    username: "",
    password: "",
  },
  subscription: {
    topic: "topic/mqttx",
    qos: 0,
  },
  publish: {
    topic: "topic/browser",
    qos: 0,
    payload: '{ "msg": "Hello, I am browser." }',
  },
  receiveNews: "",
  qosList: [
    { label: 0, value: 0 },
    { label: 1, value: 1 },
    { label: 2, value: 2 },
  ],
  subscribeSuccess: false,
};

export function createConnection() {
  console.log("Connecting...");
  const { host, port, endpoint, ...options } = data.connection;
  const connectUrl = `mqtts://${host}:${port}${endpoint}`;
  data.client = mqtt.connect(connectUrl, options);
  data.client.on("connect", () => {
    console.log("Connection succeeded!");
  });
  data.client.on("error", (error) => {
    console.log("Connection failed", error);
  });
  data.client.on("message", (topic, message) => {
    data.receiveNews = data.receiveNews.concat(message.toString());
    console.log(`Received message ${message} from topic ${topic}`);
  });
}

export function doSubscribe() {
  const { topic, qos } = data.subscription;
  data.client?.subscribe(topic, { qos }, (error, res) => {
    if (error) {
      console.log("Subscribe to topics error", error);
      return;
    }
    data.subscribeSuccess = true;
    console.log("Subscribe to topics res", res);
  });
}

export function doUnSubscribe() {
  const { topic } = data.subscription;
  data.client?.unsubscribe(topic, (error: any) => {
    if (error) {
      console.log("Unsubscribe error", error);
    }
  });
}

export function destroyConnection() {
  if (data.client?.connected) {
    try {
      data.client.end();
      console.log("Successfully disconnected!");
    } catch (error: any) {
      console.log("Disconnect failed", error.toString());
    }
  }
}
