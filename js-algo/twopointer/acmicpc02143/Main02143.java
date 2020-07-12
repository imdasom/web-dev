import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

public class Main02143 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int T = Integer.parseInt(br.readLine());
        int n = Integer.parseInt(br.readLine());
        List<Integer> arrA = Arrays.stream(br.readLine().split(" "))
                .map(x -> Integer.parseInt(x))
                .collect(Collectors.toList());
        int m = Integer.parseInt(br.readLine());
        List<Integer> arrB = Arrays.stream(br.readLine().split(" "))
                .map(x -> Integer.parseInt(x))
                .collect(Collectors.toList());
        Map<Integer, Integer> subsetSumList = getSubsetSumList(arrB);
        int count = getArraySum(T, subsetSumList, arrA);
        System.out.println(count);
    }

    private static Map<Integer, Integer> getSubsetSumList(List<Integer> list) {
        Map<Integer, Integer> subsetSumList = new HashMap<>();
        int[] cache = new int[list.size() + 1];
        for (int i = 0; i < list.size(); i++) {
            for (int j = 0; j < list.size() - i; j++) {
                cache[j] = cache[j] + list.get(j + i);
                if (subsetSumList.get(cache[j]) == null) {
                    subsetSumList.put(cache[j], 1);
                } else {
                    subsetSumList.put(cache[j], subsetSumList.get(cache[j]) + 1);
                }
            }
        }
        return subsetSumList;
    }

    private static int getArraySum(int N, Map<Integer, Integer> subsetSumMap, List<Integer> list) {
        int count = 0;
        int left = 0;
        int right = 0;
        int sum = list.get(0);
        while (left < list.size()) {
            if (sum < N) {
                Integer subsetCount = subsetSumMap.get(N - sum);
                if (subsetCount != null) {
                    count += subsetCount;
                }
                if (right + 1 >= list.size() || sum + list.get(right + 1) >= N) {
                    sum = sum - list.get(left++);
                } else {
                    if (right + 1 >= list.size()) {
                        break;
                    }
                    sum = sum + list.get(++right);
                }
            } else {
                sum = sum - list.get(left++);
            }
        }
        return count;
    }
}
