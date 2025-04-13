import useStore from "../store/store";
import Button from "../components/Button/Button";

function CountStoreComponent() {
    const { count, increase, decrease, setHundred } = useStore();

    return (
        <div>
            <h1>Count: {count}</h1>
            <div>
                <Button variant="primary" size="md" onClick={increase}>
                    증가
                </Button>
                <Button variant="cancel" size="md" onClick={decrease}>
                    감소
                </Button>
                <Button variant="save" size="md" onClick={setHundred}>
                    100으로 설정
                </Button>
            </div>
        </div>
    );
}

export default CountStoreComponent;