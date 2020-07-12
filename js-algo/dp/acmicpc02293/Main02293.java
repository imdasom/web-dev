import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

class Main02293 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        String line = br.readLine();
        int N = Integer.parseInt(line.split(" ")[0]);
        int K = Integer.parseInt(line.split(" ")[1]);
        int[]   cache = new int[K + 1];
                cache[0] = 1;
        String readLine = null;
        while ((readLine = br.readLine()) != null) {
            int coin = Integer.parseInt(readLine);
            for (int k = coin; k <= K; k++) {
                cache[k] = cache[k] + cache[k - coin];
            }
        }
        br.close();
        System.out.println(cache[K]);
    }
}
