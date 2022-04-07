import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

/**
 * Youtube service is responsible for fetching data from the Youtube API
 */
@Injectable({
    providedIn: 'root'
})
export class YoutubeService {

    constructor(
        private http: HttpClient
    ) {
    }

    /**
     * Fetches a list of playlists from the Youtube API
     */
    getPlaylists(): Observable<any> {
        return this.http
            .get(
                "https://youtube.googleapis.com/youtube/v3/playlists?part=snippet,contentDetails&maxResults=10&key=AIzaSyBvfOzusG95vCd7XWMYLTe4Uxd7T_EdEFM&id=PLEx5khR4g7PJELLTYwXZHcimWAwTUaWGA,PLEx5khR4g7PJquVHXtkcdo-QzK54bfmY9,PLEx5khR4g7PIEfXSB9bDS4lB-J9stOynD,PLEx5khR4g7PLCoWS5k9u2WQ8RdKqhKEKn,PLEx5khR4g7PLIOpqqfKfd6OAbzXSa_vBZ"
            );
    }

    /**
     * Fetches a playlist from the Youtube API
     * @param id the id of the playlist you would like to fetch
     */
    getPlaylist(id: string): Observable<any> {
        return this.http
            .get(
                `https://youtube.googleapis.com/youtube/v3/playlistItems?playlistId=${id}&maxResults=10&key=AIzaSyBvfOzusG95vCd7XWMYLTe4Uxd7T_EdEFM&part=snippet,contentDetails`
            )
    }

    /**
     * Fetches a video from the Youtube API
     * @param id the id of the video you would like to fetch
     */
    getVideo(id: string): Observable<any> {
        return this.http
            .get(
                `https://youtube.googleapis.com/youtube/v3/videos?id=${id}&key=AIzaSyBvfOzusG95vCd7XWMYLTe4Uxd7T_EdEFM&part=snippet,contentDetails`
            )
    }
}