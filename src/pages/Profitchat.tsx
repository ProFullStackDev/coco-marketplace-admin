import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from "recharts";

const data = [
    {
        date: "1/1/2022",
        profit1: 4000,
        profit2: 2400,
    },
    {
        date: "2/1/2022",
        profit1: 3000,
        profit2: 1398,
    },
    {
        date: "3/1/2022",
        profit1: 2000,
        profit2: 9800,
    },
    {
        date: "4/1/2022",
        profit1: 2780,
        profit2: 3908,
    },
    {
        date: "5/1/2022",
        profit1: 1890,
        profit2: 4800,
    },
    {
        date: "6/1/2022",
        profit1: 2390,
        profit2: 3800,
    },
    {
        date: "7/1/2022",
        profit1: 3490,
        profit2: 4300,
    },
];

export default function ProfitChart() {
    return (
        <div className="profitchart">
            <div>
                <ResponsiveContainer
                    width="100%"
                    height="100%"
                    debounce={30}
                    aspect={2}
                >
                    <AreaChart
                        width={730}
                        height={250}
                        data={data}
                        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                    >
                        <defs>
                            <linearGradient
                                id="colorUv"
                                x1="0"
                                y1="0"
                                x2="0"
                                y2="1"
                            >
                                <stop
                                    offset="5%"
                                    stopColor="#3329ff"
                                    stopOpacity={0.8}
                                />
                                <stop
                                    offset="95%"
                                    stopColor="#3329ff"
                                    stopOpacity={0}
                                />
                            </linearGradient>
                            <linearGradient
                                id="colorPv"
                                x1="0"
                                y1="0"
                                x2="0"
                                y2="1"
                            >
                                <stop
                                    offset="5%"
                                    stopColor="#a913ff"
                                    stopOpacity={0.8}
                                />
                                <stop
                                    offset="95%"
                                    stopColor="#a913ff"
                                    stopOpacity={0}
                                />
                            </linearGradient>
                        </defs>
                        <XAxis dataKey="date" />
                        <YAxis />
                        <CartesianGrid
                            strokeDasharray="2"
                            stroke="var(--secondary)"
                        />
                        <Tooltip
                            cursor={{ stroke: "var(--light)", strokeWidth: 1 }}
                            labelStyle={{ color: "red" }}
                        />
                        <Legend verticalAlign="top" height={40} />
                        <Area
                            type="monotone"
                            dataKey="profit1"
                            stroke="#3329ff"
                            fillOpacity={1}
                            fill="url(#colorUv)"
                        />
                        <Area
                            type="monotone"
                            dataKey="profit2"
                            stroke="#a913ff"
                            fillOpacity={1}
                            fill="url(#colorPv)"
                        />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}
