import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

public class Main {
    private static final int EMPTY_MIN_COUNT = 0;
    private static List<Integer> arr;
    private static int N;
    private static int S;
    private static int minCount = EMPTY_MIN_COUNT;
    private static int sum;
    private static int head;
    private static int end;

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        String conditions = br.readLine();
        N = Integer.parseInt(conditions.split(" ")[0]);
        S = Integer.parseInt(conditions.split(" ")[1]);
        String arrStr = br.readLine();
        br.close();
        arr = Arrays.stream(arrStr.split(" "))
                .map((str) -> Integer.valueOf(str))
                .collect(Collectors.toList());
        sum = arr.get(0);
        while (end < N) {
            if (head == end) {
                changeMinCountWhenEqualPointer();
                moveEnd();
            } else {
                if (sum >= S) {
                    changeMinCount();
                    moveHead();
                } else {
                    moveEnd();
                }
            }
        }
        System.out.println(minCount);
    }

    private static void changeMinCountWhenEqualPointer() {
        minCount = arr.get(head) >= S ? 1 : minCount;
    }

    private static void changeMinCount() {
        int subsetCount = end - head + 1;
        if (minCount == EMPTY_MIN_COUNT || subsetCount < minCount) {
            minCount = subsetCount;
        }
    }

    private static void moveHead() {
        sum -= arr.get(head++);
    }

    private static void moveEnd() {
        boolean canForward = end + 1 < N;
        if (canForward) {
            sum += arr.get(++end);
        } else {
            end++;
        }
    }
}
