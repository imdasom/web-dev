import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

class Main01644 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        String line = br.readLine();
        int N = Integer.parseInt(line);
        List<Integer> primeNumberList = getPrimeNumberList(N);
        int count = getCountFrom(primeNumberList, N);
        System.out.println(count);
    }

    private static List<Integer> getPrimeNumberList(int N) {
        List<Integer> primeNumberList = new ArrayList<>();
        for (int i = 0; i <= N; i++) {
            primeNumberList.add(i);
        }
        for (int i = 2; i <= N; i++) {
            if (primeNumberList.get(i) != 0) {
                for (int j = 2; i * j <= N; j++) {
                    primeNumberList.set(i * j, 0);
                }
            }
        }
        primeNumberList = primeNumberList.stream()
                .filter((item) -> item > 1)
                .collect(Collectors.toList());
        return primeNumberList;
    }

    private static int getCountFrom(List<Integer> list, int N) {
        if (N == 1) {
            return 0;
        }
        int sum = list.get(0);
        int left = 0;
        int right = 0;
        int count = 0;
        while (left < list.size()) {
            if (sum == N) {
                count++;
            }
            if (sum < N) {
                if (right + 1 >= list.size()) {
                    break;
                }
                sum = sum + list.get(++right);
            } else {
                sum = sum - list.get(left++);
            }
        }
        return count;
    }
}
