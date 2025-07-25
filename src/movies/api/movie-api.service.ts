import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import axios from 'axios';

@Injectable()
export class MovieApiService {
    constructor(private config: ConfigService) {}

    private getConfig(key: string): string {
        const value = this.config.get<string>(key);
        if (!value) {
        throw new Error(`Missing configuration for ${key}`);
        }
        return value;
    }

    async searchMovie(title: string) {
        //variable de entorno adaptable
        const baseUrl = this.config.getOrThrow<string>('OMDB_BASE_URL');
        const apiKey = this.config.getOrThrow<string>('OMDB_API_KEY');
    
        //llamo api extern
        const { data } = await axios.get(baseUrl, {
            params: {
                t: title,
                apikey: apiKey
            }
            });
        
            if (data.Response === 'False') {
            throw new Error(data.Error || 'Movie no encontrada');
            }
            
            //devolver formato estrutura: titulo, año, poster, trama, género, duración, id imdb, rating imdb
            return {
            Title: data.Title,
            Year: data.Year,
            Poster: data.Poster,
            Plot: data.Plot,
            Genre: data.Genre,
            Runtime: data.Runtime,
            imdbID: data.imdbID,
            imdbRating: data.imdbRating
            };
        }
}