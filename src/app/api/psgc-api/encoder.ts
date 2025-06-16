import { HttpUrlEncodingCodec } from '@angular/common/http';

export class CustomHttpUrlEncodingCodec extends HttpUrlEncodingCodec {
    override encodeKey(k: string): string {
        return encodeURIComponent(k);
    }

    override encodeValue(v: string): string {
        return encodeURIComponent(v);
    }
}
