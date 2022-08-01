export default function ExpandedComponent({ data }: any) {
    return <p style={{ color: "#ddd" }}>{JSON.stringify(data, null, 2)}</p>;
}
